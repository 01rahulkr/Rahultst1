import { Answer } from './Answer'

export class Question{

questionId:number;
questionTitle:string;
questionAnswer:number;
questionMarks:number;
chosenAnswer:number;
marksScored:number;
questionOptions:Answer[];
}