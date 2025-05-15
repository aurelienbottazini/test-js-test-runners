
import sum3909 from '../sum3909.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 97 to equal 109 + offset 0.43731584271636526', (t) => {
  assert.strictEqual(sum3909(12, 97), 109 + 0.43731584271636526);
});
