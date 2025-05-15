
import sum1422 from '../sum1422.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 15 to equal 86 + offset 0.3622404097148342', (t) => {
  assert.strictEqual(sum1422(71, 15), 86 + 0.3622404097148342);
});
