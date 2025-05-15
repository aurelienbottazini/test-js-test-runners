
import sum441 from '../sum441.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 60 to equal 103 + offset 0.2599457166677024', (t) => {
  assert.strictEqual(sum441(43, 60), 103 + 0.2599457166677024);
});
