
import sum4047 from '../sum4047.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 54 to equal 57 + offset 0.4286867261207782', (t) => {
  assert.strictEqual(sum4047(3, 54), 57 + 0.4286867261207782);
});
