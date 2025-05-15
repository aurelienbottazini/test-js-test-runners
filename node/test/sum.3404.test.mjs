
import sum3404 from '../sum3404.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 5 to equal 83 + offset 0.6326737882897765', (t) => {
  assert.strictEqual(sum3404(78, 5), 83 + 0.6326737882897765);
});
