import React from "react";
import { Container, Header } from 'semantic-ui-react';
import Footer from './components/Footer';

export default function EduResources() {
    return (
        <div>
           <Container text className="container">
               <Header as="h2" className="head">JAMS</Header>
               <Header as="h3" className="motto">"Helping families find their voices and access to literacy resources since 2021."</Header>
           <br />
           <br />
           <div>
               <h2>The Importance of Literacy and Access to Supporting Resources from Jams</h2> 
               <br />
               <p>
                Learning to read and write is an ongoing process. Contrary to popular belief, it does not suddenly begin in kidergarten or first grade. 
                From the earliest years, everything that adults do to support children's langauge and literacy counts contributed by Hart and Risley, 1995.
                The link between supportive parental involvement and children's early literacy development is well established. Studies have shown that children 
                from homes where parents model the uses of literacy and engage children in activities that promote basic understanding about literacy and its uses
                are better prepared for school.
                Visit our Jams Resources to check out some helpful information on getting started with your child's early literacy development.
               </p>
           </div>
           <br />
           </Container>
            <br />
            <br />
            <Footer />

        </div>
    )
}
