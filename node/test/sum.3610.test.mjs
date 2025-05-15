
import sum3610 from '../sum3610.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 7 to equal 69 + offset 0.8676578977075131', (t) => {
  assert.strictEqual(sum3610(62, 7), 69 + 0.8676578977075131);
});
