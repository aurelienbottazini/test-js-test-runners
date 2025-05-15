
import sum1958 from '../sum1958.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 77 to equal 170 + offset 0.8412622211218439', (t) => {
  assert.strictEqual(sum1958(93, 77), 170 + 0.8412622211218439);
});
