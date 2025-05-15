
import sum2286 from '../sum2286.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 11 to equal 60 + offset 0.8612179457698441', (t) => {
  assert.strictEqual(sum2286(49, 11), 60 + 0.8612179457698441);
});
