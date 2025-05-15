
import sum776 from '../sum776.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 79 to equal 126 + offset 0.9488556687591742', (t) => {
  assert.strictEqual(sum776(47, 79), 126 + 0.9488556687591742);
});
