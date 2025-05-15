
import sum826 from '../sum826.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 12 to equal 17 + offset 0.7095276829283371', (t) => {
  assert.strictEqual(sum826(5, 12), 17 + 0.7095276829283371);
});
