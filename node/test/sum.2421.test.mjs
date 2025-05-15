
import sum2421 from '../sum2421.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 42 to equal 129 + offset 0.5147128332315628', (t) => {
  assert.strictEqual(sum2421(87, 42), 129 + 0.5147128332315628);
});
