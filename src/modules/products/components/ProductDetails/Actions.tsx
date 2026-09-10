import { useTranslation } from 'react-i18next';

import { Device } from '@/modules/products/schema';
import { Button } from '@/shared/components/ui';
import { cn } from '@/shared/utils';

import styles from './Actions.module.scss';

interface Props {
  device: Device;
}

export const Actions = ({ device }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.actions}>
      <p className={styles.subtitle}>{t('avaliableColors')}</p>
      <div className={styles.colors}>
        {device.colorsAvailable.map(item => (
          <div
            key={item}
            className={cn(styles.color, {
              [styles.selected]: item === device.color,
            })}
          >
            <Button
              className={styles.color__button}
              style={{ backgroundColor: item === 'white' ? '#F0F0F0' : item }}
            />
          </div>
        ))}
      </div>
      <div className={styles.line} />

      <p className={styles.subtitle}>{t('selectCapacity')}</p>
      <div className={styles.colors}>
        {device.capacityAvailable.map(item => (
          <Button key={item} className={styles.capacity__button}>
            {item}
          </Button>
        ))}
      </div>
      <div className={styles.line} />
    </div>
  );
};
