
import sum673 from '../sum673.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 82 to equal 172 + offset 0.07626285039795033', (t) => {
  assert.strictEqual(sum673(90, 82), 172 + 0.07626285039795033);
});
