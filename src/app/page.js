import Header from '@/components/layout/Header';
import Nav from '@/components/layout/Nav';
import Head from 'next/head';
import Image from 'next/image';
import Section from '@/components/layout/Section';

export default function Home() {
    return (
        <>
            <Section title="섹션1">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Section>
            <Section />
            <Section />
        </>
    );
}
