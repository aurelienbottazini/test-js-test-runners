
import sum3882 from '../sum3882.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 65 to equal 123 + offset 0.3642358104901371', (t) => {
  assert.strictEqual(sum3882(58, 65), 123 + 0.3642358104901371);
});
