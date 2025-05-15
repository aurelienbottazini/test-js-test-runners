
import sum2388 from '../sum2388.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 65 to equal 81 + offset 0.10415191607646856', (t) => {
  assert.strictEqual(sum2388(16, 65), 81 + 0.10415191607646856);
});
