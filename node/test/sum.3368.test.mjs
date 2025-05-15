
import sum3368 from '../sum3368.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 55 to equal 125 + offset 0.1497578760187157', (t) => {
  assert.strictEqual(sum3368(70, 55), 125 + 0.1497578760187157);
});
