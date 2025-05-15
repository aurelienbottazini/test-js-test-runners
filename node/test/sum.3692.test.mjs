
import sum3692 from '../sum3692.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 60 to equal 96 + offset 0.007010670526961582', (t) => {
  assert.strictEqual(sum3692(36, 60), 96 + 0.007010670526961582);
});
