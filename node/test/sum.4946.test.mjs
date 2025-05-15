
import sum4946 from '../sum4946.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 16 to equal 97 + offset 0.13042424350495196', (t) => {
  assert.strictEqual(sum4946(81, 16), 97 + 0.13042424350495196);
});
