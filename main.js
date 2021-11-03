var mainApp = angular.module("mainApp", []);

mainApp.controller('marksContoller', ($scope) => 
{
    $scope.mark = {
        data:[
        {
            id: 1,
            subject: 'Безопасность жизнедеятельности', 
            date: '25.12.2020',
            teacher: 'Зайцев А.С.',
            mark: 5,
            retakes: 0
        }, 
        {
            id: 2,
            subject: 'Физкультура', 
            date: '26.12.2020',
            teacher: 'Павлов М.А.',
            mark: 5,
            retakes: 0
        },
        {
            id: 3,
            subject: 'Программирование', 
            date: '29.12.2020',
            teacher: 'Морозов И.Е.',
            mark: 5,
            retakes: 0
        },
        {
            id: 4,
            subject: 'Алгоритмизация', 
            date: '12.01.2021',
            teacher: 'Семенова Е.П.',
            mark: 4,
            retakes: 0
        },
        {
            id: 5,
            subject: 'Алгебра', 
            date: '14.01.2021',
            teacher: 'Чиж А.А.',
            mark: 5,
            retakes: 0
        },
        {
            id: 6,
            subject: 'Введение в программную инженерию', 
            date: '16.01.2021',
            teacher: 'Агафонов В.О.',
            mark: 4,
            retakes: 0
        },
        {
            id: 7,
            subject: 'Английский язык', 
            date: '21.06.2021',
            teacher: 'Перова М.С.',
            mark: 3,
            retakes: 0
        },
        {
            id: 8,
            subject: 'История', 
            date: '23.06.2021',
            teacher: 'Алексеев К.В.',
            mark: 3,
            retakes: 0
        },
        {
            id: 9,
            subject: 'Курсовая работа', 
            date: '25.06.2021',
            teacher: 'Замятина В.М.',
            mark: 5,
            retakes: 0
        },
        {
            id: 10,
            subject: 'Математический анализ', 
            date: '28.06.2021',
            teacher: 'Батяева Л.Н.',
            mark: 4,
            retakes: 0
        },
        {
            id: 11,
            subject: 'Дискретная математика', 
            date: '30.06.2021',
            teacher: 'Соловьев П.П.',
            mark: 4,
            retakes: 0
        }]
    };
    $scope.order = function(x)
    {
        $scope.dataSort = x;
    }
});

mainApp.controller('tasksContoller', ($scope) => 
{
    $scope.task = {
        data:[
        {
            id: 1,
            subject: 'Безопасность жизнедеятельности', 
            task: 'Реферат о безопасности при пожаре',
            deadline: '13.09.2020',
            done: true,
            mark: 5
        },
        {
            id: 2,
            subject: 'Программирование', 
            task: 'Лабораторная работа 1',
            deadline: '20.09.2020',
            done: true,
            mark: 4
        },
        {
            id: 3,
            subject: 'Алгебра', 
            task: 'Микроконтроль 1',
            deadline: '13.09.2020',
            done: true,
            mark: 5
        },
        {
            id: 4,
            subject: 'Алгебра', 
            task: 'Микроконтроль 2',
            deadline: '20.09.2020',
            done: false,
            mark: 2
        },
        {
            id: 5,
            subject: 'Алгоритмизация', 
            task: 'Задачи по обходу цикла',
            deadline: '16.09.2020',
            done: true,
            mark: 4
        },
        {
            id: 6,
            subject: 'Алгебра', 
            task: 'Микроконтроль 3',
            deadline: '27.09.2020',
            done: true,
            mark: 5
        }],
        doneHomework: function(done)
        {
            if(done == true)
            {
                return "✔";
            }
            else
            {
                return "✖";
            }
        }
    };
    $scope.order = function(x)
    {
        $scope.dataSort = x;
    };
});

