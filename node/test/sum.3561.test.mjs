
import sum3561 from '../sum3561.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 81 to equal 104 + offset 0.5913148497657968', (t) => {
  assert.strictEqual(sum3561(23, 81), 104 + 0.5913148497657968);
});
