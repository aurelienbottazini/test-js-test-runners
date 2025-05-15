
import sum1331 from '../sum1331.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 0 to equal 16 + offset 0.16907549063147742', (t) => {
  assert.strictEqual(sum1331(16, 0), 16 + 0.16907549063147742);
});
