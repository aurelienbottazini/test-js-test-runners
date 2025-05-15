
import sum737 from '../sum737.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 61 to equal 150 + offset 0.9438560655459729', (t) => {
  assert.strictEqual(sum737(89, 61), 150 + 0.9438560655459729);
});
