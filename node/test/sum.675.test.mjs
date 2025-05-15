
import sum675 from '../sum675.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 79 to equal 119 + offset 0.689519299942345', (t) => {
  assert.strictEqual(sum675(40, 79), 119 + 0.689519299942345);
});
