
import sum3855 from '../sum3855.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 29 to equal 103 + offset 0.27588352166685803', (t) => {
  assert.strictEqual(sum3855(74, 29), 103 + 0.27588352166685803);
});
