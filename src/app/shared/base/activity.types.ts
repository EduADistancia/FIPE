/** Composición */
export interface TitleActivity {
    courseTitle: string;
    evaluationTitle: string;
    subtitle: string;
}

export interface Instructions {
    instructionText: string[];
}

export interface HeaderActivity {
    title: TitleActivity;
    instructions: Instructions;
}

/** Opciones de cuentionarios */
export interface OptionTF {
    correct: boolean;
    justificationCorrect: string | null;
    justificationIncorrect: string | null;
}

export interface OptionMO {
    answer: string;
    isCorrect: boolean;
    justification: string | null;
}

export interface Option {
    answer: string;
    isCorrect: boolean;
    justification: string | null;
}

/** Preguntas de cuestionarios */
export interface Question {
    title?: string | null;
    question: string;
    options: Option[];
}

export interface QuestionTF {
    title?: string | null;
    question: string;
    answer: OptionTF;
}

export interface QuestionMO {
    title?: string | null;
    question: string;
    options: OptionMO[];
}

/** Items de clasificar y agrupar */
export interface GroupTableItem {
    content: string;
    keyLabel: string;
}

/** Casos (exmaen final) */
export interface Case {
    caseTitle: string;
    situation: string;
    questions: Question[];
    score: number;
}

/** Retroalimentación */
export interface Feedback {
    resultOk?: string[] | null;
    resultNotOk?: string[] | null;
}

export interface Badget {
    text: string;
    url?: string | null;
}

/** Tipos de actividades */
export interface BaseActivity {
    idAccess: string;
    header: HeaderActivity;
    passingScore: number;
    feedback?: Feedback;
    badget?: Badget;
}

export interface CasesActivity extends BaseActivity {
    type: 'cases';
    monocase: boolean;
    cases: Case[];
}

export interface QuizTFActivity extends BaseActivity {
    type: 'true-false';
    questions: QuestionTF[];
}

export interface QuizMOActivity extends BaseActivity {
    type: 'multi-choice';
    questions: QuestionMO[];
}

export interface GroupTableActivity extends BaseActivity {
    type: 'group-table';
    labels: { 
        key:string; 
        label:string;
    }[];
    items: GroupTableItem[];
}

/** Conjunto de datos */
export interface Activities {
    cases: CasesActivity[];
    quizTF: QuizTFActivity[];
    quizMO: QuizMOActivity[];
    groupTable: GroupTableActivity[];
}