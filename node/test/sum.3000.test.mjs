
import sum3000 from '../sum3000.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 35 to equal 69 + offset 0.2190366070605959', (t) => {
  assert.strictEqual(sum3000(34, 35), 69 + 0.2190366070605959);
});
