SELECT d.SALARY, COUNT(u.ID), AVG(u.SALARY)
	FROM Users u JOIN Department d ON d.ID = u.DEPARTMENT_ID GROUP BY
    d.SALARY;