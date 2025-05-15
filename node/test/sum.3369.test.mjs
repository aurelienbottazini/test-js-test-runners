
import sum3369 from '../sum3369.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 8 to equal 33 + offset 0.1322928030707302', (t) => {
  assert.strictEqual(sum3369(25, 8), 33 + 0.1322928030707302);
});
