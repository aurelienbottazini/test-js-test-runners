
import sum1170 from '../sum1170.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 83 to equal 99 + offset 0.3992707246007071', (t) => {
  assert.strictEqual(sum1170(16, 83), 99 + 0.3992707246007071);
});
