
import sum3726 from '../sum3726.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 11 to equal 37 + offset 0.22114782040743075', (t) => {
  assert.strictEqual(sum3726(26, 11), 37 + 0.22114782040743075);
});
