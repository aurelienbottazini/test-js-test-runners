
import sum1356 from '../sum1356.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 93 to equal 142 + offset 0.7882843438121145', (t) => {
  assert.strictEqual(sum1356(49, 93), 142 + 0.7882843438121145);
});
