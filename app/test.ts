import { Time } from '@angular/common';
import { Question } from './Question';


export class Test {
    testId: number;
    testTitle: string;
    testDuration: number;
    testTotalMarks: number=0;
    startTime: Time;
    endTime: Time;
    testQuestions:Question[];
}