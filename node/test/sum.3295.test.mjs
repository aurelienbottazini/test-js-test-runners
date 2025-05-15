
import sum3295 from '../sum3295.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 23 to equal 105 + offset 0.9032156512561025', (t) => {
  assert.strictEqual(sum3295(82, 23), 105 + 0.9032156512561025);
});
