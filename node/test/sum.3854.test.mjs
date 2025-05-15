
import sum3854 from '../sum3854.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 56 to equal 56 + offset 0.7543664362779207', (t) => {
  assert.strictEqual(sum3854(0, 56), 56 + 0.7543664362779207);
});
