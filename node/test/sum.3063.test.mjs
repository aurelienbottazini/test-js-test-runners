
import sum3063 from '../sum3063.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 4 to equal 63 + offset 0.010554619163611112', (t) => {
  assert.strictEqual(sum3063(59, 4), 63 + 0.010554619163611112);
});
