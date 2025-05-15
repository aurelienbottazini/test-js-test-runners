
import sum1357 from '../sum1357.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 76 to equal 87 + offset 0.8160381391530789', (t) => {
  assert.strictEqual(sum1357(11, 76), 87 + 0.8160381391530789);
});
