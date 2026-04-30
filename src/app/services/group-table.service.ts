import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupTableService {
  private draggedElement: HTMLElement | null = null;

  async activateAreas(): Promise<void> {
    const dropAreas: NodeListOf<HTMLElement> = document.querySelectorAll('.drop-area');
    dropAreas.forEach((da) => this.dragndrop(da));
  }

  private dragndrop(dropArea: HTMLElement): void {
    const words: NodeListOf<HTMLElement> = document.querySelectorAll('p.word');

    // --- Eventos para palabras ---
    words.forEach((word) => {
      word.addEventListener('dragstart', (e) => this.dragStart(e));
      word.addEventListener('dragend', (e) => this.dragEnd(e));
      word.addEventListener('touchstart', (e) => this.touchStart(e));
      word.addEventListener('touchmove', (e) => this.touchMove(e));
      word.addEventListener('touchend', (e) => this.touchEnd(e));
    });

    // --- Eventos de dropArea ---
    dropArea.addEventListener('dragover', (e) => this.dragOver(e, dropArea));
    dropArea.addEventListener('dragleave', () => this.dragLeave(dropArea));
    dropArea.addEventListener('drop', (e) => this.drop(e, dropArea));
  }

  // -------------------------
  // Métodos para escritorio
  // -------------------------
  private dragStart(event: DragEvent): void {
    this.draggedElement = event.target as HTMLElement;
    if (this.draggedElement) {
      setTimeout(() => {
        this.draggedElement!.style.opacity = '0.5';
      }, 0);
    }
  }

  private dragEnd(event: DragEvent): void {
    const target = event.target as HTMLElement;
    target.style.opacity = '1';
    this.draggedElement = null;
  }

  private dragOver(event: DragEvent, dropArea: HTMLElement): void {
    event.preventDefault();
    dropArea.classList.add('drop-highlight');
    
  }

  private dragLeave(dropArea: HTMLElement): void {
    dropArea.classList.remove('drop-highlight');
  }

  private drop(event: DragEvent, dropArea: HTMLElement): void {
    event.preventDefault();
    if (this.draggedElement) {
      this.draggedElement.classList.add('dropped');
      dropArea.appendChild(this.draggedElement);
      this.draggedElement.style.opacity = '1';
      dropArea.classList.remove('drop-highlight');

      const valueAttr = this.draggedElement.getAttribute('value');
      if (valueAttr) {
        document.querySelector(`.${valueAttr}`)?.remove();
      }

      const fragmentos = document.querySelector('#dropElements') as HTMLElement | null;

      if (fragmentos && fragmentos.childElementCount === 0) {
        document.querySelector('#verify')?.classList.remove('hidden');
      }
    }
  }

  // -------------------------
  // Métodos para móviles
  // -------------------------
  private touchStart(event: TouchEvent): void {
    this.draggedElement = event.target as HTMLElement;

    if (this.draggedElement) {
      const rect = this.draggedElement.getBoundingClientRect();
      this.draggedElement.style.width = `${rect.width}px`;
      this.draggedElement.style.height = `${rect.height}px`;

      this.draggedElement.classList.add('dragging');

      this.draggedElement.style.opacity = '0.5';
    }
  }

  private touchMove(event: TouchEvent): void {
    if (!this.draggedElement) return;

    event.preventDefault();
    const touch = event.touches[0];

    this.draggedElement.style.left = `${touch.clientX - this.draggedElement.offsetWidth / 2}px`;
    this.draggedElement.style.top = `${touch.clientY - this.draggedElement.offsetHeight / 2}px`;

    // Quita los highlights previos
    document.querySelectorAll('.drop-area').forEach(area =>
      area.classList.remove('drop-highlight')
    );

    // Detecta drop-area bajo el touch
    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropArea = elemBelow?.closest('.drop-area') as HTMLElement | null;

    if (dropArea) dropArea.classList.add('drop-highlight');
  }

  private touchEnd(event: TouchEvent): void {
    if (!this.draggedElement) return;

    event.preventDefault();

    const touch = event.changedTouches[0];

    const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropArea = elemBelow?.closest('.drop-area') as HTMLElement | null;

    if (dropArea) {
      dropArea.appendChild(this.draggedElement);
      this.draggedElement.classList.add('dropped');

      const valueAttr = this.draggedElement.getAttribute('value');
      if (valueAttr) {
        document.querySelector(`.${valueAttr}`)?.remove();
      }

      const fragmentos = document.querySelector('#dropElements') as HTMLElement | null;
      if (fragmentos && fragmentos.childElementCount === 0) {
        document.querySelector('#verify')?.classList.remove('hidden');
      }
    }

    this.draggedElement.style.opacity = '1';
    this.draggedElement.style.position = 'static';
    this.draggedElement.style.zIndex = 'initial';

    document.querySelectorAll('.drop-area').forEach(area =>
      area.classList.remove('drop-highlight')
    );

    this.draggedElement.classList.remove('dragging');
    this.draggedElement.style.width = '';
    this.draggedElement.style.height = '';
    this.draggedElement.style.opacity = '1';

    this.draggedElement = null;
  }
}
