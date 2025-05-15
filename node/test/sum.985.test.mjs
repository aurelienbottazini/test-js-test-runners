
import sum985 from '../sum985.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 37 to equal 55 + offset 0.9152785119458018', (t) => {
  assert.strictEqual(sum985(18, 37), 55 + 0.9152785119458018);
});
