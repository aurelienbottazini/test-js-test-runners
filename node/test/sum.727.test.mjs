
import sum727 from '../sum727.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 36 to equal 133 + offset 0.0603637301088813', (t) => {
  assert.strictEqual(sum727(97, 36), 133 + 0.0603637301088813);
});
