
import sum2640 from '../sum2640.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 71 to equal 126 + offset 0.23653805477885148', (t) => {
  assert.strictEqual(sum2640(55, 71), 126 + 0.23653805477885148);
});
