
import sum1570 from '../sum1570.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 53 to equal 84 + offset 0.8636454370455274', (t) => {
  assert.strictEqual(sum1570(31, 53), 84 + 0.8636454370455274);
});
