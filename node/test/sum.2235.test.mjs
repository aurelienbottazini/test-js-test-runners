
import sum2235 from '../sum2235.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 5 to equal 35 + offset 0.9336299518092742', (t) => {
  assert.strictEqual(sum2235(30, 5), 35 + 0.9336299518092742);
});
