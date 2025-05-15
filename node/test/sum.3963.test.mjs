
import sum3963 from '../sum3963.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 34 to equal 65 + offset 0.5813169021480533', (t) => {
  assert.strictEqual(sum3963(31, 34), 65 + 0.5813169021480533);
});
