'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import PaddedView from '@/components/PaddedView/PaddedView';
import FadeIn from '@/components/FadeIn/FadeIn';

import { Section } from './styles';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      $delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

type THomeViewProps = {
  intro: string;
};

const HomeView = ({ intro }: THomeViewProps) => {
  const pathname = usePathname();

  // const [$isLoaded, set$isLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     set$isLoaded(true);
  //   }, 500);
  // }, []);

  return (
    <motion.main
      animate="enter"
      exit="exit"
      initial="initial"
      key={pathname}
      variants={variants}
    >
      <PaddedView>
        <Section>
          <FadeIn $delay={300}>
            <ReactMarkdown
              components={{
                a(props) {
                  const { node, ...rest } = props;
                  return <a target="_blank" {...rest} />;
                },
              }}
            >
              {intro}
            </ReactMarkdown>
          </FadeIn>
        </Section>
      </PaddedView>
    </motion.main>
  );
};

export default HomeView;
