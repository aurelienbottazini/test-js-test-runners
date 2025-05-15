
import sum3137 from '../sum3137.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 25 to equal 116 + offset 0.8870925050211196', (t) => {
  assert.strictEqual(sum3137(91, 25), 116 + 0.8870925050211196);
});
