
import sum4906 from '../sum4906.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 60 to equal 146 + offset 0.5733190579198036', (t) => {
  assert.strictEqual(sum4906(86, 60), 146 + 0.5733190579198036);
});
