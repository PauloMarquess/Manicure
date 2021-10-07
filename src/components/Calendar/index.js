import React from 'react';
import {Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule'
import { Container } from '../Footer/styled';

const Calendar=() => {
    return (
          <Container>
          <ScheduleComponent height="400px" >
            <Inject services = {[Day,Week,WorkWeek,Month,Agenda]}/>

          </ScheduleComponent>
          </Container>
    )
}

export default Calendar;