
import sum841 from '../sum841.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 80 to equal 168 + offset 0.7631454392279431', (t) => {
  assert.strictEqual(sum841(88, 80), 168 + 0.7631454392279431);
});
