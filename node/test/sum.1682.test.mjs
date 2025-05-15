
import sum1682 from '../sum1682.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 69 to equal 146 + offset 0.9948858663966157', (t) => {
  assert.strictEqual(sum1682(77, 69), 146 + 0.9948858663966157);
});
