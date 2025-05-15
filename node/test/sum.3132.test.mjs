
import sum3132 from '../sum3132.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 18 to equal 68 + offset 0.03718741505124634', (t) => {
  assert.strictEqual(sum3132(50, 18), 68 + 0.03718741505124634);
});
