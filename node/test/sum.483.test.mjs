
import sum483 from '../sum483.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 37 to equal 99 + offset 0.9433367321141726', (t) => {
  assert.strictEqual(sum483(62, 37), 99 + 0.9433367321141726);
});
